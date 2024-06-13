

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Container, List, ListItem, ListItemText } from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCourses(page);
  }, [page]);

  const fetchCourses = async (page) => {
    try {
      const response = await axios.get(`http://localhost:1337/api/courses?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
      setCourses(response.data.data);
      setTotalPages(response.data.meta.pagination.pageCount);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id}>
            <ListItemText primary={course.attributes.title} secondary={course.attributes.description} />
          </ListItem>
        ))}
      </List>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Container>
  );
};

export default Courses;
