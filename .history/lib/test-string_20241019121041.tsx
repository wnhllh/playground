// @/lib/test-string.tsx
export const componentStrings1 = [
`
<ResizableComponent id="1" width="99%" height="25%" className="p-4">
  <CodeGenerator>
    import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
  </CodeGenerator>
</ResizableComponent>
`,
`
<ResizableComponent id="2" width="31%" height="50%" className="p-4">
  <CodeGenerator>
    import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
  </CodeGenerator>
</ResizableComponent>
`,
`
<ResizableComponent id="3" width="67%" height="50%" className="p-4">
  <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Device Showcase Section</h1></div>; export default App;
  </CodeGenerator>
</ResizableComponent>`,
`
<ResizableComponent id="5" width="99%" height="25%" className="p-4">
  <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Footer</h1></div>; export default App;
  </CodeGenerator>
</ResizableComponent>`
 ];
  
 export const componentStrings3 = [
  `
  <ResizableComponent id="1" width="45%" height="25%" className="p-4">
    <CodeGenerator>
      import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>
  `,
  `
  <ResizableComponent id="2" width="55%" height="25%" className="p-4">
    <CodeGenerator>
      import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>
  `,
  `
  <ResizableComponent id="4" width="99%" height="70%" className="p-4">
    <CodeGenerator>
          import React from 'react'; const App = () => <div><h1>Video Showcase</h1></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>`,
  `
  <ResizableComponent id="5" width="99%" height="70%" className="p-4">
    <CodeGenerator>
          import React from 'react'; const App = () => <div><h1>Footer</h1></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>`
   ];


   export const componentStrings2 = [
    `
    <ResizableComponent id="1" width="99%" height="25%" className="p-4">
      <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Header</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>
    `,
    `
    <ResizableComponent id="2" width="75%" height="50%" className="p-4">
      <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>
    `,
    `
    <ResizableComponent id="3" width="22%" height="50%" className="p-4">
      <CodeGenerator>
            import React from 'react'; const App = () => <div><h1>Device Showcase Section</h1></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>`,
    `
    <ResizableComponent id="5" width="99%" height="40%" className="p-4">
      <CodeGenerator>
            import React from 'react'; const App = () => <div><h1>Test</h1></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>`
     ];

export const componentStrings = [
  `
  <ResizableComponent id="1" width="99%" height="99%" className="p-4">
  <CodeGenerator>
import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { FaUser, FaComments, FaStar, FaFeedback } from 'react-icons/fa';
import axios from 'axios';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [comments, setComments] = useState([]);
  const [feedback, setFeedback] = useState('');
  const toast = useToast();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: isLogin ? 'Logged in successfully.' : 'Account created successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setFormData({ username: '', email: '', password: '' });
  };

  const handleFeedback = () => {
    if (!feedback.trim()) {
      toast({
        title: 'Feedback cannot be empty.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Thank you for your feedback!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setFeedback('');
  };

  return (
    <ChakraProvider>
      <Box bg={isDarkMode ? '#3A3D42' : '#FFFFFF'} color={isDarkMode ? 'white' : '#3A3D42'}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding="1.5rem"
          bg={isDarkMode ? '#3A3D42' : '#FFFFFF'}
          borderBottom="1px solid"
          borderColor={isDarkMode ? '#F8F9FA' : '#E2D1F9'}
        >
          <Heading as="h1" size="lg" fontFamily="Montserrat, sans-serif">
            MyApp
          </Heading>
          
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <Button key={item} variant="ghost" fontFamily="Open Sans, sans-serif" _hover={{ textDecoration: 'underline' }}>
                {item}
              </Button>
            ))}
          </HStack>
          <HStack spacing={4}>
            <Tooltip label="Toggle Theme">
              <IconButton
                icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
                variant="ghost"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle Theme"
              />
            </Tooltip>
            <Avatar size="sm" name="User" src="https://bit.ly/broken-link" />
            <Menu>
              <MenuButton as={Button} variant="ghost" leftIcon={<FaUser />}>
                Profile
              </MenuButton>
              <MenuList>
                <MenuItem icon={<FaComments />}>Comments</MenuItem>
                <MenuItem icon={<FaStar />}>Ratings</MenuItem>
                <MenuItem icon={<FaFeedback />}>Feedback</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="flex-start">
                {['Home', 'About', 'Services', 'Contact'].map(item => (
                  <Button key={item} variant="ghost" width="100%">
                    {item}
                  </Button>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <Box p={8} maxW="1200px" mx="auto">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" mb={8}>
            {/* Registration/Login Form */}
            <Box w={{ base: '100%', md: '45%' }} p={6} borderWidth={1} borderRadius="lg" bg={isDarkMode ? '#3A3D42' : '#F8F9FA'}>
              <Heading as="h2" size="md" mb={4} fontFamily="Montserrat, sans-serif">
                {isLogin ? 'Login' : 'Register'}
              </Heading>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <FormControl id="username" mb={4} isRequired>
                    <FormLabel fontFamily="Open Sans, sans-serif">Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      bg="#FFFFFF"
                      borderColor="#F8F9FA"
                    />
                  </FormControl>
                )}
                <FormControl id="email" mb={4} isRequired>
                  <FormLabel fontFamily="Open Sans, sans-serif">Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    bg="#FFFFFF"
                    borderColor="#F8F9FA"
                  />
                </FormControl>
                <FormControl id="password" mb={4} isRequired>
                  <FormLabel fontFamily="Open Sans, sans-serif">Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    bg="#FFFFFF"
                    borderColor="#F8F9FA"
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="100%" mb={4} fontFamily="Open Sans, sans-serif">
                  {isLogin ? 'Login' : 'Register'}
                </Button>
              </form>
              <Button
                variant="link"
                color={isDarkMode ? '#F8F9FA' : '#3A3D42'}
                onClick={() => setIsLogin(!isLogin)}
                fontFamily="Open Sans, sans-serif"
              >
                {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
              </Button>
            </Box>

            {/* Search and Interactive Features */}
            <Box w={{ base: '100%', md: '50%' }} mt={{ base: 8, md: 0 }} p={6} borderWidth={1} borderRadius="lg" bg={isDarkMode ? '#3A3D42' : '#F8F9FA'}>
              <Heading as="h2" size="md" mb={4} fontFamily="Montserrat, sans-serif">
                Search
              </Heading>
              <Flex mb={6}>
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="#FFFFFF"
                  borderColor="#F8F9FA"
                />
                <Button ml={2} colorScheme="teal" aria-label="Search">
                  <SearchIcon />
                </Button>
              </Flex>

              {/* Comments Section */}
              <Heading as="h3" size="sm" mb={2} fontFamily="Montserrat, sans-serif">
                Recent Comments
              </Heading>
              <VStack align="stretch" spacing={4} mb={6}>
                {comments.map((comment) => (
                  <Box key={comment.id} p={4} borderWidth={1} borderRadius="md" bg={isDarkMode ? '#3A3D42' : '#FFFFFF'}>
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="bold" fontFamily="Open Sans, sans-serif">
                        {comment.name}
                      </Text>
                      <Text fontSize="sm" color="#A0C4E0">
                        {comment.email}
                      </Text>
                    </HStack>
                    <Text fontFamily="Open Sans, sans-serif">{comment.body}</Text>
                  </Box>
                ))}
              </VStack>

              {/* Feedback Form */}
              <Heading as="h3" size="sm" mb={2} fontFamily="Montserrat, sans-serif">
                Feedback
              </Heading>
              <FormControl id="feedback" mb={4}>
                <Input
                  type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your feedback..."
                  bg="#FFFFFF"
                  borderColor="#F8F9FA"
                />
              </FormControl>
              <Button colorScheme="purple" onClick={handleFeedback} fontFamily="Open Sans, sans-serif">
                Submit Feedback
              </Button>
            </Box>
          </Flex>

          {/* Profile Management */}
          <Box p={6} borderWidth={1} borderRadius="lg" bg={isDarkMode ? '#3A3D42' : '#F8F9FA'}>
            <Heading as="h2" size="md" mb={4} fontFamily="Montserrat, sans-serif">
              Profile Management
            </Heading>
            <FormControl id="profile-username" mb={4}>
              <FormLabel fontFamily="Open Sans, sans-serif">Username</FormLabel>
              <Input
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                bg="#FFFFFF"
                borderColor="#F8F9FA"
              />
            </FormControl>
            <FormControl id="profile-email" mb={4}>
              <FormLabel fontFamily="Open Sans, sans-serif">Email</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                bg="#FFFFFF"
                borderColor="#F8F9FA"
              />
            </FormControl>
            <FormControl id="profile-password" mb={4}>
              <FormLabel fontFamily="Open Sans, sans-serif">Password</FormLabel>
              <Input
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                bg="#FFFFFF"
                borderColor="#F8F9FA"
              />
            </FormControl>
            <Button colorScheme="blue" fontFamily="Open Sans, sans-serif">
              Update Profile
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          bg={isDarkMode ? '#3A3D42' : '#FFFFFF'}
          color={isDarkMode ? '#F8F9FA' : '#3A3D42'}
          py={4}
          textAlign="center"
          borderTop="1px solid"
          borderColor={isDarkMode ? '#F8F9FA' : '#E2D1F9'}
        >
          <Text fontFamily="Open Sans, sans-serif">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;  </CodeGenerator>
</ResizableComponent>
`
]

export const componentStrings8 = [`
<ResizableComponent width="100%" height="auto" className="p-4">
  <NodeCard className="w-full">
    <NodeCardHeader>
      <NodeCardTitle>Welcome to Our Mixed Component Test</NodeCardTitle>
      <NodeCardDescription>This example demonstrates both custom components and raw HTML elements.</NodeCardDescription>
    </NodeCardHeader>
    <NodeCardContent>
      <div className="space-y-4">
        <NodeAccordion type="single" collapsible>
          <NodeAccordionItem value="item-1">
            <NodeAccordionTrigger>Custom Components Section</NodeAccordionTrigger>
            <NodeAccordionContent>
              <NodeButton className="mr-2">Click Me!</NodeButton>
              <NodeBadge variant="outline">New Feature</NodeBadge>
              <NodeAvatar src="https://github.com/shadcn.png" fallback="CN" />
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
        
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Raw HTML Section</h3>
          <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
        
        <NodeAlert>
          <NodeAlertTitle>Heads up!</NodeAlertTitle>
          <NodeAlertDescription>
            This is an example of nested components with raw HTML.
          </NodeAlertDescription>
        </NodeAlert>
      </div>
    </NodeCardContent>
    <NodeCardFooter>
      <NodeButton variant="outline">Cancel</NodeButton>
      <NodeButton>Submit</NodeButton>
    </NodeCardFooter>
  </NodeCard>
</ResizableComponent>
`];

export const componentStrings24 = [
  // Header
  `
  <ResizableComponent width="100%" height="10%" className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">

    <NodeCard className="w-full">
						<NodeCardHeader>
							<NodeCardTitle>Card Title</NodeCardTitle>
							<NodeCardDescription>Card Description</NodeCardDescription>
						</NodeCardHeader>
						<NodeCardContent></NodeCardContent>
						<NodeCardFooter>
							<NodeButton className="w-full">Footer button</NodeButton>
						</NodeCardFooter>
					</NodeCard>
  </ResizableComponent>
  `,

  // Interactive Elements
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAccordion type="single" collapsible className="h-full">
          <NodeAccordionItem value="item-1" className="h-full">
            <NodeAccordionTrigger>Interactive Elements</NodeAccordionTrigger>
            <NodeAccordionContent className="h-full">
              <div className="space-y-4 h-full flex flex-col justify-center">
                <NodeButton className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                  Gradient Button
                </NodeButton>
                <NodeCheckbox label="Check me!" className="text-indigo-600" />
    <Input id="input" type={type} placeholder={placeholder} {...props} />
              </div>
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Visual Elements
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAccordion type="single" collapsible className="h-full">
          <NodeAccordionItem value="item-2" className="h-full">
            <NodeAccordionTrigger>Visual Elements</NodeAccordionTrigger>
            <NodeAccordionContent className="h-full">
              <div className="space-y-4 h-full flex flex-col justify-center">
                <NodeAvatar src="https://example.com/avatar.jpg" alt="User Avatar" className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500" />
                <NodeBadge variant="outline" className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                  Premium User
                </NodeBadge>
                <NodeAlert variant="info" className="bg-gradient-to-r from-green-100 to-blue-500">
                  <NodeAlertTitle>Info</NodeAlertTitle>
                  <NodeAlertDescription>This is an informational alert with a gradient background.</NodeAlertDescription>
                </NodeAlert>
              </div>
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Calendar
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeCollapsible className="h-full border border-gray-200 rounded-md">
          <NodeCollapsible.Trigger className="w-full p-4 text-left font-medium bg-gradient-to-r from-gray-50 to-gray-100">
            Toggle Calendar
          </NodeCollapsible.Trigger>
          <NodeCollapsibleContent className="p-4 h-[calc(100%-3rem)]">
            <NodeCalendar className="h-full bg-white shadow-md rounded-lg" />
          </NodeCollapsibleContent>
        </NodeCollapsible>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Aspect Ratio Container
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAspectRatio ratio={16 / 9} className="h-full">
          <div className="w-full h-full bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
            16:9 Aspect Ratio Container
          </div>
        </NodeAspectRatio>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Footer
  `
  <ResizableComponent width="100%" height="20%" className="bg-gradient-to-br from-gray-100 to-gray-200">
    <NodeCard className="h-full bg-blue-500 rounded-lg shadow-lg overflow-hidden">
      <NodeCardFooter className="h-full p-4 flex justify-between items-center">
        <NodeHoverCard>
          <NodeHoverCard.Trigger>
            <NodeButton variant="outline" className="text-gray-700 hover:text-gray-900">
              Hover for more info
            </NodeButton>
          </NodeHoverCard.Trigger>
          <NodeHoverCard.Content className="bg-white p-4 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <p className="text-sm text-gray-600">This complex component demonstrates various nested elements and gradient styles.</p>
          </NodeHoverCard.Content>
        </NodeHoverCard>
        <NodeDialog>
          <NodeDialog.Trigger asChild>
            <NodeButton className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
              Open Dialog
            </NodeButton>
          </NodeDialog.Trigger>
          <NodeDialog.Content className="bg-white rounded-lg shadow-xl p-6">
            <NodeDialog.Header>
              <NodeDialog.Title className="text-2xl font-bold text-gray-900">Dialog Title</NodeDialog.Title>
              <NodeDialog.Description className="text-sm text-gray-500">
                This is a description of the dialog content.
              </NodeDialog.Description>
            </NodeDialog.Header>
            <div className="mt-4">
              <p className="text-gray-700">Dialog content goes here...</p>
            </div>
            <NodeDialog.Footer className="mt-6 flex justify-end">
              <NodeDialog.Close asChild>
                <NodeButton variant="outline" className="mr-2">Cancel</NodeButton>
              </NodeDialog.Close>
              <NodeButton className="bg-blue-500 text-white">Confirm</NodeButton>
            </NodeDialog.Footer>
          </NodeDialog.Content>
        </NodeDialog>
      </NodeCardFooter>
    </NodeCard>
  </ResizableComponent>
  `
];
