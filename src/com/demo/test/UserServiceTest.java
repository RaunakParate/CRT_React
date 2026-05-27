package com.demo.test;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.demo.model.User;
import com.demo.repository.UserRepository;
import com.demo.service.UserService;

public class UserServiceTest {
	
	@Mock
	UserRepository userRepository ;
	
	@InjectMocks
	UserService userService;
	
	@BeforeEach
	void setup()
	{
		MockitoAnnotations.openMocks(this);
		
	}
	@Test
	void testGetUserById() {
		User fakeUser = new User(1,"Aditya");
		
		when(userRepository.findById(1))
		.thenReturn(fakeUser);
	}
}
