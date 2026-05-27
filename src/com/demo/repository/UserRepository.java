package com.demo.repository;

import com.demo.model.User;

public interface UserRepository {
	User findById(int id);

}
