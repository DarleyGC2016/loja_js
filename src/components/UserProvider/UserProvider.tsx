import { FormProvider, useForm } from "react-hook-form"
import UserForm from "../UserForm/UserForm";
import { userSchema, UserSchema } from "@/model/model";
import { zodResolver } from "@hookform/resolvers/zod";


const UserProvider = () => {
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

    function handleCreateUserSubmit(data: UserSchema) {
        console.log('Data: ', data);

    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleCreateUserSubmit)}>
                <UserForm />
            </form>
        </FormProvider>
    );
}

export default UserProvider;