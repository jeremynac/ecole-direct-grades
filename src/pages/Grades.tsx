import { Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetGrades } from "../hooks/useGetGrades";

export const Grades: React.FC = () => {
    const { grades, isLoading } = useGetGrades();
    return (<Stack alignItems="center"
        justifyContent="center"
        spacing={4}
    >
        <Typography>
            Notes
        </Typography>
        {
            isLoading ? (
                <CircularProgress />
            ) : (
                grades?.map((grade, index) => (
                    <Card key={index} sx={{ width: '400px' }}>
                        <CardContent>
                            <Typography>
                                {grade.subjectName}
                            </Typography>
                            {typeof grade.value === "number" ?
                                `${grade.value} / ${grade.outOf}`
                                : grade.value}
                        </CardContent>
                    </Card>
                ))
            )
        }
    </Stack>)

}