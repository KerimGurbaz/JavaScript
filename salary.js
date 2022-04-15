# Salary increase calculation; Let there be a series of salaries received by workers. Let's create an array map that raises 15% for those whose salary is over 3000 TL and 25% for those whose salary is below.


            const salary = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
            const new_salary = salary.map((e) => {
                if (e > 3000)
                    return e * 1.15;
                else
                    return e * 1.25;
            });

            console.log(new_salary);
