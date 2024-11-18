import type { Metadata } from "next";
import { Models } from "node-appwrite";
import { getFiles } from "@/lib/actions/file.actions";
import Sort from "@/components/modules/sort";
import Card from "@/components/modules/card";
import { getFileTypesParams } from "@/lib/utils";

function nameParam(type: string) {
  const name =
    type === "documents"
      ? "Tài liệu"
      : type === "images"
        ? "Ảnh"
        : type === "media"
          ? "Phương tiện"
          : "Khác";

  return name;
}

export async function generateMetadata({
  params,
}: SearchParamProps): Promise<Metadata> {
  const type = ((await params)?.type as string) || "";
  const name = nameParam(type);

  return {
    title: `${name}`,
  };
}

async function MainPage({ searchParams, params }: SearchParamProps) {
  const sort = ((await searchParams)?.sort as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";

  const type = ((await params)?.type as string) || "";
  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort });

  const name = nameParam(type);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1">{name}</h1>
        <div className="total-size-section">
          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">
              Sắp xếp theo:
            </p>
            <Sort />
          </div>
        </div>
      </section>
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">Chưa có tệp nào được đăng tải</p>
      )}
    </div>
  );
}

export default MainPage;
