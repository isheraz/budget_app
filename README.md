# budget app

This app is for trainings purposes and may or may not be used professionally later in time.

# Expense module is in progress

1. Database connection is created
2. Database creation through NestJs entities is completed

# Authentication

1. User registration is completed
   - Route: /user/register
   - Params: name, phone?, email, password
   - Use TypeORM hooks to hash password before create record in the database
2. Email confirmation is in progress

# Add Angular in the project
1. Add Login and Registration component
2. Add Validations
3. Listen to submit event
4. Create Authentication service for login and register
