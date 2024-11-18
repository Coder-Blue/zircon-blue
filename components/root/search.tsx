"use client";

import { useEffect, useState } from "react";
import { getFiles } from "@/lib/actions/file.actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Models } from "node-appwrite";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import Thumbnail from "@/components/root/thumbnail";
import FormattedDatetime from "@/components/modules/formatted-datetime";
import { SearchIcon } from "lucide-react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);

  const [debouncedQuery] = useDebounce(query, 300);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const path = usePathname();
  const router = useRouter();

  function handleClickItem(file: Models.Document) {
    setOpen(false);
    setResults([]);

    router.push(
      `/${file.type === "video" || file.type === "audio" ? "media" : file.type + "s"}?query=${query}`,
    );
  }

  useEffect(() => {
    async function fetchFiles() {
      if (debouncedQuery.length === 0) {
        setResults([]);
        setOpen(false);

        return router.push(path.replace(searchParams.toString(), ""));
      }

      const files = await getFiles({ types: [], searchText: debouncedQuery });

      setResults(files.documents);
      setOpen(true);
    }

    fetchFiles();
  }, [debouncedQuery]);

  useEffect(() => {
    if (searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <SearchIcon className="size-[24px]" />
        <Input
          value={query}
          placeholder="Tìm kiếm..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        {open === true && (
          <ul className="search-result">
            {results.length > 0 ? (
              results.map((file) => (
                <li
                  key={file.$id}
                  onClick={() => handleClickItem(file)}
                  className="flex items-center justify-between"
                >
                  <div className="flex cursor-pointer items-center gap-4">
                    <Thumbnail
                      type={file.type}
                      extension={file.extension}
                      url={file.url}
                      className="size-9 min-w-9"
                    />
                    <p className="subtitle-2 line-clamp-1 text-light-100">
                      {file.name}
                    </p>
                  </div>
                  <FormattedDatetime
                    date={file.$createdAt}
                    className="caption line-clamp-1 text-light-200"
                  />
                </li>
              ))
            ) : (
              <p className="empty-result">Không tìm thấy tệp nào</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
