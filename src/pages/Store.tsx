import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, filterPostBySearchFilter } from '@/Redux/Post/PostAction';
import { AppDispatch, RootState } from '@/Redux/store';
import StoreItem from '@/PageComponents/StoreItem';
import { Box, Button, Flex, Input, Text, SimpleGrid } from '@chakra-ui/react';
import DefaulltHeader from '@/PageComponents/DefaulltHeader';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  

  // Function to parse query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const accommodationType = params.get('accommodationType');
    const district = params.get('district');
    return { accommodationType, district };
  };

  const { accommodationType, district } = getQueryParams();

  useEffect(() => {
    if (accommodationType && district) {
      dispatch(filterPostBySearchFilter({ district, accommodationType }));
    } else {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, accommodationType, district]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      setSearchQuery(decodeURIComponent(query));
    } else {
      setSearchQuery('');
    }
  }, [location.search]);

  // useEffect(() => {
  //   dispatch(fetchAllPosts());
  // }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const filteredPosts = allPost.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentItems = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>

    <Box p={4} mx={{ base: 2, md: 4, lg: 8 }}>
      <Text fontSize="2xl" mb={4}>Store</Text>
      

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
    </>
  );
}
