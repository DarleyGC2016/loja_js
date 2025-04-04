import { userSchema } from "@/model/model";
import { UserSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useUser = () => {
    const methods = useForm<UserSchema>({
        mode: "all",
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            lastName: "",
            cpf: "",
            news: true,
            prom: true
        }
    });

    return { methods }
}