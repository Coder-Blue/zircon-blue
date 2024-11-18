"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { uploadFile } from "@/lib/actions/file.actions";
import { usePathname } from "next/navigation";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import { MAX_FILE_SIZE } from "@/constants";
import { Button } from "@/components/ui/button";
import Thumbnail from "@/components/root/thumbnail";
import { CircleXIcon, CloudUploadIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FileUploaderProps = {
  ownerId: string;
  accountId: string;
  className?: string;
};

export default function FileUploader({
  ownerId,
  accountId,
  className,
}: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const path = usePathname();
  const { toast } = useToast();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);

      const uploadPromises = acceptedFiles.map(async (file) => {
        if (file.size > MAX_FILE_SIZE) {
          setFiles((prevFiles) =>
            prevFiles.filter((f) => f.name !== file.name),
          );

          return toast({
            description: (
              <p className="body-2 text-white">
                <span className="font-semibold">{file.name}</span> quá nặng. Chỉ
                có thể nhận tối đa 50MB.
              </p>
            ),
            className: "error-toast",
          });
        }

        return uploadFile({ file, ownerId, accountId, path }).then(
          (uploadedFile) => {
            if (uploadedFile) {
              setFiles((prevFile) =>
                prevFile.filter((f) => f.name !== file.name),
              );
            }
          },
        );
      });

      await Promise.all(uploadPromises);
    },
    [ownerId, accountId, path],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function handleRemoveFile(
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    fileName: string,
  ) {
    event.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  }

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <Button type={"button"} className={cn("uploader-button", className)}>
        <CloudUploadIcon className="size-[24px]" />
        <p>Đăng tải</p>
      </Button>
      {files.length > 0 && (
        <ul className="uploader-preview-list">
          <h4 className="h4 text-light-100">Đang đăng tải</h4>
          {files.map((file, index) => {
            const { type, extension } = getFileType(file.name);

            return (
              <li
                key={`${file.name}-${index}`}
                className="uploader-preview-item"
              >
                <div className="flex items-center gap-3">
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}
                  />
                  <div className="preview-item-name">
                    {file.name}
                    <Image
                      src={"/assets/icons/file-loader.gif"}
                      width={80}
                      height={26}
                      alt="Loader"
                      unoptimized
                    />
                  </div>
                </div>
                <CircleXIcon
                  className="size-[24px]"
                  onClick={(e) => handleRemoveFile(e, file.name)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
