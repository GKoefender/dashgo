import { useRouter } from 'next/router'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

function SignIn () {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('E-mail obrigatório')} error={errors.email} />
          <Input name="password" type="password" label="Senha" {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" isLoading={isSubmitting} onClick={() => router.push('/dashboard')}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default SignIn