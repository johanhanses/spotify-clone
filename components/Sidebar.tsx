import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch
} from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
]

const playList = new Array(30).fill(0).map((_, i) => `Playlist ${i + 1}`)

export const Sidebar = () => (
  <Box
    width="100%"
    height="calc(100vh - 100px)"
    bg="black"
    paddingX="5px"
    color="gray"
  >
    <Box paddingY="20px" height="100%">
      <Box width="120px" marginBottom="20px" paddingX="20px">
        <Image src="/logo.svg" height={60} width={120} alt="logo" />
      </Box>
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map(({ name, route, icon }) => (
            <ListItem paddingX="20px" fontSize="16px" key={name}>
              <LinkBox>
                <Link href={route} passHref>
                  <LinkOverlay>
                    <ListIcon as={icon} color="white" marginRight="20px" />
                    {name}
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider color="gray.800" />
      <Box marginY="20px">
        <List spacing={2}>
          {musicMenu.map(({ name, route, icon }) => (
            <ListItem paddingX="20px" fontSize="16px" key={name}>
              <LinkBox>
                <Link href={route} passHref>
                  <LinkOverlay>
                    <ListIcon as={icon} color="white" marginRight="20px" />
                    {name}
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider color="gray.800" />
      <Box height="66%" overflowY="auto" paddingY="20px">
        <List spacing={2}>
          {playList.map((p) => (
            <ListItem paddingX="20px" key={p}>
              <LinkBox>
                <Link href="" passHref>
                  <LinkOverlay>{p}</LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
)
