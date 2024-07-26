import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '@/Redux/Post/PostAction';
import { AppDispatch, RootState } from '@/Redux/store';
import StoreItem from '@/PageComponents/StoreItem';
import { Box, Button, Flex, Input, Text, SimpleGrid } from '@chakra-ui/react';

interface Post {
  id: number;
  title: string;
  cityDistrict: string;
  accommodationType: string;
}

const ITEMS_PER_PAGE = 9;

export default function Store() {
  const dispatch = useDispatch<AppDispatch>();
  const { allPost } = useSelector((state: RootState) => state.Post);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter posts based on search query
  const filteredPosts = allPost.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentItems = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  

  return (
    <Box p={4} mx={{ base: 2, md: 4, lg: 8 }}>
      <Text fontSize="2xl" mb={4}>Store</Text>
      {/* Search Input */}
      <Box mb={4}>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
          variant="outline"
          focusBorderColor="green.500"
          sx={{
            h: '40px',
            maxW: '600px',
            cursor: 'text',
            borderRadius: 'md',
            borderColor: 'gray.200',
            bg: 'gray.100',
            py: 2,
            pl: 4,
            outline: 'none',
            ringColor: 'emerald.200',
            _hover: {
              borderColor: 'emerald.300',
            },
            transition: 'all 0.2s',
          }}
        />
      </Box>

      {/* Posts Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mb={4}>
        {currentItems.length ? (
          currentItems.map(post => (
            <StoreItem key={post.id} post={post} />
          ))
        ) : (
          <Text>No posts found.</Text>
        )}
      </SimpleGrid>

      {/* Pagination Controls */}
      <Flex justify="center" align="center">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Text mx={4}>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          isDisabled={currentPage === totalPages}
          ml={2}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}
