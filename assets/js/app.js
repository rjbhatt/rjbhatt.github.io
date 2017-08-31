var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.experiences =
    [
        {
            title: 'CIS 350: Data Structures & Algorithm Analysis',
            text: 'This course focuses on data and algorithm design. Data design topics include object-oriented discussions of hashing, advanced tree structures, graphs, and sets. Algorithm design topics include the greedy, divide-and-conquer, dynamic programming, backtracking, and branch-and-bound techniques. (4 credits)',
            image: 'assets/img/DataStructures.jpg',
            link: 'https://umdearborn.edu/cecs/departments/computer-and-information-science/undergraduate-programs/courses'
        },
        {
            title: 'CIS 275/CIS 306: Discrete Structures I & II',
            text: 'This course introduces students to advanced topics in discrete mathematics, including the theory of computation (finite automata, Turing machines), grammars, and complexity theory (decidability, P, NO, NP-completeness). Other topics are selected from the current topics of interest with mathematical content, such as RSA encryption, coding theory, information theory, software metrics, computational geometry, quantum computing, and game theory. (4 credits each)',
            image: 'assets/img/DiscreteMath.png',
            link: 'https://umdearborn.edu/cecs/departments/computer-and-information-science/undergraduate-programs/courses'
        },
        {
            title: 'CIS 285: Software Engineering Tools',
            text: 'This course covers various case tools, such as UML modeling and code generation tools, configuration management tools, defect management tools, an integrated development environment for coding and debugging, unit and testing tools, and build tools. Students will learn these tools in a laboratory environment. This course will be comprised of two lecture hours and one two-hour laboratory. (3 credits)',
            image: 'assets/img/SoftwareEngineering.jpg',
            link: 'https://umdearborn.edu/cecs/departments/computer-and-information-science/undergraduate-programs/courses'
        },
        {
            title: 'CIS 150/CIS 200: Computer Science I & II',
            text: 'This course presents techniques for the design, writing, testing, and debugging of medium-sized programs, and an introduction to data structures (stacks, queues, linked lists) using an object-oriented programming language. Topics covered include pointers, templates, and inheritance. The principles of UML modeling are continued. This course will consist of three lecture hours and one two-hour laboratory. (4 credits each)',
            image: 'assets/img/ComputerScience.jpg',
            link: 'https://umdearborn.edu/cecs/departments/computer-and-information-science/undergraduate-programs/courses'
        },
        {
            title: 'BA 100: Perspectives of Business in a Changing World',
            text: 'This interdisciplinary course introduces students to how business works. The course emphasizes hands-on, interactive learning. Students will learn about emerging issues and career opportunities in business areas. (3 credits)',
            image: 'assets/img/BA100.jpg',
            link: 'https://umdearborn.edu/cecs/departments/computer-and-information-science/undergraduate-programs/courses'
        },
    ];
    $scope.interests =
    [
        {
            name: 'Software Engineering Intern  Seattle, WA (Headquarters)',
            text: 'June 2016 - August 2016',
            link: 'https://drive.google.com/file/d/0B3KhqAYlTLsIWG1TUnlHcXduSjZGSTQyVi0xU1JkZFFRSEpv/view?usp=sharing',
            image: 'assets/img/Nordstrom.jpg'
        },
        {
            name: 'Systems Engineering Co-op  Findlay, OH (Headquarters)',
            text: 'January 2016 - May 2016',
            link: 'https://drive.google.com/file/d/0B3KhqAYlTLsIWG1TUnlHcXduSjZGSTQyVi0xU1JkZFFRSEpv/view?usp=sharing',
            image: 'assets/img/MPC.png'
        },
        {
            name: 'Agile Business Analyst Intern   Detroit, MI (Headquarters)',
            text: 'September 2015 - December 2015',
            link: 'https://drive.google.com/file/d/0B3KhqAYlTLsIWG1TUnlHcXduSjZGSTQyVi0xU1JkZFFRSEpv/view?usp=sharing',
            image: 'assets/img/QL.jpg'
        },
        {
            name: 'IT Intern - VoIp Development Dearborn, MI',
            text: 'May 2015 - August 2015',
            link: 'https://drive.google.com/file/d/0B3KhqAYlTLsIWG1TUnlHcXduSjZGSTQyVi0xU1JkZFFRSEpv/view?usp=sharing',
            image: 'assets/img/ASG.jpeg'
        }
    ];
}]);
