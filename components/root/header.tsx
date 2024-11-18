import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import Search from "@/components/root/search";
import FileUploader from "@/components/root/file-uploader";
import { LogOutIcon } from "lucide-react";

export default function Header({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type={"submit"} className="sign-out-button">
            <LogOutIcon className="size-[24px] w-6" />
          </Button>
        </form>
      </div>
    </header>
  );
}
