const userCategoriesTypes = [
  {
    categoryTypeTitle: 'User',
    amountFollowers: 5
  },
  {
    categoryTypeTitle: 'Friendly',
    amountFollowers: 50,
  },
  {
    categoryTypeTitle: 'Famous',
    amountFollowers: 500,
  },
  {
    categoryTypeTitle: 'Super Star',
    amountFollowers: 1000,
  },
]

export default async function getGithubUserCategory(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const searchUserOnGithub = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (searchUserOnGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUser = await searchUserOnGithub.json()

  const sortedListOfUserCategories = userCategoriesTypes.sort((userCategoryTypeA, userCategoryTypeB) =>  userCategoryTypeB.amountFollowers - userCategoryTypeA.amountFollowers);

  const selectedUserCategoryType = sortedListOfUserCategories.find(userCategoryType => githubUser.amountFollowers > userCategoryType.amountFollowers)

  const githubUserCategory = {
    githubUsername,
    category: selectedUserCategoryType?.categoryTypeTitle
  }

  return githubUserCategory
}

getGithubUserCategory({ query: {
  username: 'lfnd0'
}}, {})
