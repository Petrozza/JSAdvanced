function filterEmp(data, criteria) {
    let employees = JSON.parse(data);
    let criteriaTokens = criteria.split('-');
    let criteriaKey = criteriaTokens[0];
    let criteriaValuye = criteriaTokens[1];

    let filtered = employees.filter(x => x[criteriaKey] == criteriaValuye);

    if (criteria == 'all') {
        print(employees);
    } else {
        print(filtered)
    };

    function print(shit) {
        for (let i = 0; i < shit.length; i++) {
            let firstName = shit[i]['first_name'];
            let lastName = shit[i]['last_name'];
            let email = shit[i]['email'];
            console.log(`${i}. ${firstName} ${lastName} - ${email}`);

        }
    }

}



filterEmp(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);