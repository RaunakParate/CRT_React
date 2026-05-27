package com.demo.service;

import com.demo.model.User;
import com.demo.repository.UserRepository;

public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	public User getUserById(int id) {
		return userRepository.findById(id);
	}

}
