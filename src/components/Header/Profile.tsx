import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}


export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Koefender</Text>
          <Text color="gray.300" fontSize="small">gustavo.koefender@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Gustavo Koefender" src="https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-scaled.jpg" />
    </Flex>
  )
}