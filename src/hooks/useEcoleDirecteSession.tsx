import { Family, Session, Staff, Teacher } from "ecoledirecte.js";
import { useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import { UseMutateFunction, useMutation } from "react-query";
const accountAtom = atomWithStorage<Student | null>('account', null);
interface Student {
    username: string,
    password: string
    anneeScolaireCourante: string;
    civilite: string;
    codeOgec: string;
    couleurAgendaEtablissement: string;
    dicoEnLigneLeRobert: true
    email: string;
    id: number;
    idLogin: number;
    identifiant: string;
    lastConnexion: string;
    logoEtablissement: string;
    main: boolean;
    modules: [];
}
export const useEcoleDirecteSession = (): {
    account: Student | null, login: UseMutateFunction<Student | Family | Staff | Teacher, unknown, {
        username: string;
        password: string;
    }, unknown>, isLoading: boolean, isError: boolean, logout: () => void
} => {
    const [account, setAccount] = useAtom(accountAtom);
    const { mutate: login, isLoading, isError } = useMutation(({ username, password }: { username: string, password: string }) => {
        const session = new Session(
            username,
            password
        );
        session.token = '';
        return fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json());
    }, {
        onSuccess: (student) => {
            if (student && student.type === "student") {
                setAccount({
                    username: student.session._username,
                    password: student.session._password,
                    ...student.account
                });
            }
        }
    });
    const logout = () => {
        setAccount(null);
    }
    return { account, login, logout, isLoading, isError };
}