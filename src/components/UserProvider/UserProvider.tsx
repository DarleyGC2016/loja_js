import { FormProvider } from "react-hook-form"
import UserForm from "../UserForm/UserForm";
import { Typography } from "@mui/material";
import { UserSchema } from "@/types/types";
import { useUser } from "@/hook/user/useUser";


const UserProvider = () => {
    const {methods} = useUser({
        name: "",
        lastName: "",
        cpf: "",
        news: false,
        prom: false
    });
    
    function handleCreateUserSubmit(data: UserSchema) {
        console.log('Data: ', data);

    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleCreateUserSubmit)}>
                <Typography variant="h3" align="center" component="h1">
                    Cadastro da Loja
                </Typography>
                <UserForm />
            </form>
        </FormProvider>
    );
}

export default UserProvider;