import React from "react";
import { Models } from "node-appwrite";
import Thumbnail from "@/components/root/thumbnail";
import FormattedDatetime from "@/components/modules/formatted-datetime";
import { convertFileSize, formatDateTime } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

type ShareInputProps = {
  file: Models.Document;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (email: string) => void;
};

function ImageThumbnail({ file }: { file: Models.Document }) {
  return (
    <div className="file-details-thumbnail">
      <Thumbnail type={file.type} extension={file.extension} url={file.url} />
      <div className="flex flex-col">
        <p className="subtitle-2 mb-1">{file.name}</p>
        <FormattedDatetime date={file.$createdAt} className="caption" />
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex">
      <p className="file-details-label text-left">{label}</p>
      <p className="file-details-value text-left">{value}</p>
    </div>
  );
}

export function FileDetails({ file }: { file: Models.Document }) {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Định dạng:" value={file.extension} />
        <DetailRow label="Kích cỡ:" value={convertFileSize(file.size)} />
        <DetailRow label="Sở hữu bởi:" value={file.owner.fullName} />
        <DetailRow
          label="Chỉnh sửa gần nhất:"
          value={formatDateTime(file.$updatedAt)}
        />
      </div>
    </>
  );
}

export function ShareInput({ file, onInputChange, onRemove }: ShareInputProps) {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="share-wrapper">
        <p className="subtitle-2 pl-1 text-light-100">
          Chia sẻ tệp với người dùng khác
        </p>
        <Input
          type={"email"}
          placeholder="Nhập địa chỉ email"
          onChange={(e) => onInputChange(e.target.value.trim().split(","))}
          className="share-input-field"
        />
        <div className="pt-4">
          <div className="flex justify-between">
            <p className="subtitle-2 text-light-100">Chia sẻ với</p>
            <p className="subtitle-2 text-light-200">
              {file.users.length} người dùng
            </p>
          </div>
          <ul className="pt-2">
            {file.users.map((email: string) => (
              <li
                key={email}
                className="flex items-center justify-between gap-2"
              >
                <p className="subtitle-2">{email}</p>
                <Button
                  onClick={() => onRemove(email)}
                  className="share-remove-user"
                >
                  <Image
                    src={"/assets/icons/remove.svg"}
                    alt="Remove"
                    width={24}
                    height={24}
                    className="remove-icon"
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
