import { useEffect, useState } from "react"

interface UserData {
  username: string;
  githubUrl: string;
}

function fetchUserDataGithub() {
  return {
    responseData: {
      userData: {
        username: 'Joseph Oliveira',
        githubUrl: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfileOnGithub() {
  const [isLoadingUsername, setIsLoadingUsername] = useState(false)
  const [userData, setUserData] = useState<UserData>()

  useEffect(() => {
    function loadUserData() {
      setIsLoadingUsername(true)

      const fetchUserResponse = fetchUserDataGithub()

      setUserData(fetchUserResponse.responseData.userData)

      setIsLoadingUsername(false)
    }

    loadUserData()
  })

  if (isLoadingUsername) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.githubUrl}.png`} alt="" />
      <a href={userData?.githubUrl}>{userData?.username}</a>
    </div>
  )
}
