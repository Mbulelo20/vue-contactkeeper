exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      const people =[{
        name: 'Mbulelo',
        surname: 'Pani',
        email: 'Mbulelopani09@gmail.com',
      },
      {
        name: 'Elon',
        surname: 'Musk',
        email: 'muskE@teslamail.com',
      },
      {
        name: 'Victor',
        surname: 'Bangani',
        email: 'victorbangani@touchfoundry.com',
      }
    ];

    return knex('contacts').insert(people);
    });
};
