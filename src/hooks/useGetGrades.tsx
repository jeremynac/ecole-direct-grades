import { Grade } from "ecoledirecte.js";
import { useQuery } from "react-query";
import { useEcoleDirecteSession } from "./useEcoleDirecteSession";

export const useGetGrades = (): {
    grades: Grade[] | undefined;
    isLoading: boolean;
} => {
    const { account } = useEcoleDirecteSession();
    const { data, isLoading } = useQuery(["grades"], () => {
        console.log(account);
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/grades`, {
            method: "POST",
            body: JSON.stringify({ username: account?.username, password: account?.password }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json() as Promise<Grade[] | undefined>)
    });
    return {
        grades: data,
        isLoading
    }
}