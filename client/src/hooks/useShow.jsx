
import {useToast} from '@chakra-ui/toast'
import { useCallback } from 'react';
const useShow = () =>{
    const toast = useToast();

    const showToast = useCallback((title,description,status) =>{
        toast({
            title,
            description,
            status,
            duration:3000,
            isClosable:true,
        })

    },[toast])
    return showToast
}

export default useShow