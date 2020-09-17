using System;
using System.Collections.Generic;

namespace Users.Data
{
    public static class Data
    {
        public static List<User> Users => allUsers;

        static List<User> allUsers = new List<User>()
        {
            new User()
            {
                userId= 1,
                firstName="Bob",
                lastName="Sally",
                companyName="First Company",
                phone="123456789",
                email="a@a.com",
                address="123, First Raod",
                password="1234",
                userType="client"
            },
            new User()
            {
                userId= 2,
                firstName="Bob",
                lastName="Sally",
                companyName="Second Company",
                phone="123456789",
                email="a@a.com",
                address="123, Second Raod",
                password="1234",
                userType="client"
            },
            new User()
            {
                userId= 3,
                firstName="Bob",
                lastName="Sally",
                companyName="Third Company",
                phone="123456789",
                email="a@a.com",
                address="123, Third Raod",
                password="1234",
                userType="client"
            },

        };
    }
}
