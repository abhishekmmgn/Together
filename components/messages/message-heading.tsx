import { IoChevronBack } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import formatAvatarName from "@/helpers/formatAvatarName";
import { ActiveConversationType } from "@/types";

type propsType = {
  name: string;
  profilePhoto: string;
  setActiveConversation: React.Dispatch<
    React.SetStateAction<ActiveConversationType>
  >;
};
export default function MessageHeading(props: propsType) {
  return (
    <>
      <div className="w-full fixed z-40 top-0 inset-x-0 bg-background py-2 backdrop-filter backdrop-blur-xl bg-opacity-90 sm:top-14 sm:w-[calc(100%-210px)] md:w-[calc(100%-232px)] md:max-w-2xl sm:inset-x-auto">
        <div
          onClick={() =>
            props.setActiveConversation({
              conversationId: "",
              otherUserId: "",
            })
          }
        >
          <IoChevronBack className="w-6 h-6 text-tertiary-foreground absolute left-5 top-5 cursor-pointer sm:left-0" />
        </div>

        <div className="w-full flex flex-col gap-1 items-center justify-center">
          <Avatar className="w-11 h-11">
            <AvatarImage src={props.profilePhoto} alt={props.name} />
            <AvatarFallback>{formatAvatarName(props.name)}</AvatarFallback>
          </Avatar>
          <h1 className="line-clamp-1 text-sm font-medium">{props.name}</h1>
        </div>
      </div>
    </>
  );
}
