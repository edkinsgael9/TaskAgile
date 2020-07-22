package com.taskagile.domain.application;

import org.springframework.stereotype.Service;

import com.taskagile.domain.application.commands.RegistrationCommand;
import com.taskagile.domain.model.user.RegistrationException;

@Service
public class UserServiceImpl  implements UserService{

	@Override
	public void register(RegistrationCommand command) throws RegistrationException {
		// TODO Auto-generated method stub
		
	}

}
