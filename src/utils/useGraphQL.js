import { useEffect, useState, useRef } from "react";
import graphQl from "./graphqlRequest/graphqlRequest";

export default function useGraphQL ({
    operationName,
    query,
    variables
}, deps = []) {
    const [graphqlState, setGraphqlState] = useState({
        loading: true,
        data: null
    });

    const controllerRef = useRef(null);

    const getQraphQLData = async () => {
        const response = graphQl({
            operationName,
            query,
            variables,
            params: {
                signal: controllerRef.current.signal
            }
        });

        const data = await response.json();

        setGraphqlState({
            loading: false,
            data
        })
    }

    useEffect(() => {
        if (controllerRef?.current) {
            controllerRef.current.abort();
        }
        controllerRef.current = new AbortController();

        setGraphqlState({
            loading: true,
            data: null
        });
        getQraphQLData();
    }, deps)

    return graphqlState;
}