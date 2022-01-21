let app = angular.module("myApp",["ngRoute", "ngAnimate"]);

app.config(["$routeProvider",($routeProvider)=>{

    $routeProvider.when("/main",{
        templateUrl:"views/main.html"
    })
    
    .when("/products",{
        templateUrl:"views/products.html",
        activePage: 'products'
    })
    .when("/campaigns",{
        templateUrl:"views/campaigns.html",
        activePage: 'campaigns'
    })
    .when("/events",{
        templateUrl:"views/events.html",
        activePage: 'events'
    })
    .when("/apps",{
      templateUrl:"views/apps.html",
      activePage: 'apps'
  })
    .otherwise ({
      templateUrl: "/views/products.html",
      activePage: 'products'
    })

}])


app.controller('navCtrl', ['$scope', '$route',($scope, $route)=>{
  //we set $route to  we have access to it in the HTML
  $scope.$route = $route;
}])



app.controller('myProducts', ['$scope', ($scope)=>{

    $scope.products = [
        {
            name:"Galaxy Z Fold3 5G",
            image: "images/icons/galaxy-z-fold3-5g.png",
        },

        {
            name:"Galaxy Z Flip3 5G",
            image: "images/icons/galaxy-z-flip3-5g.png",
        },

        {
            name:"Galaxy S21 Ultra 5G",
            image: "images/icons/galaxy-s21-ultra-5g.png",
        },

        {
            name:"Galaxy S21 FE | S21 | S21+ 5G",
            image: "images/icons/galaxy-s21.png",
        },

        {
            name:"Galaxy Buds2",
            image: "images/icons/galaxy-buds.png",
        },

        {
            name:"Galaxy Watch4",
            image: "images/icons/galaxy-watch4.png",
        },

        {
            name:"Galaxy Watch4 Classic",
            image: "images/icons/galaxy-watch4-classic.png",
        },

        {
            name:"Accessories",
            image: "images/icons/galaxy-z-fold3_acc.png",
        },

        // {
        //     name:"Galaxy Tabs S7 | S7+",
        //     image: "images/products/E1399A1A152.jpg",
        // },

        // {
        //     name:"Galaxy Book S",
        //     image: "images/products/E1399A1A152.jpg",
        // }
    ]

}])

app.controller('myController', ['$scope', ($scope)=> {
      
  $scope.phones = [
        
        {
          brand: 'Galaxy S21 FE | s21 | S21+ 5G',
          img: 'images/products/banner_galaxy-s21-fe-5g_galaxy-s21-5g.png',
        },
  
        {
          brand: 'Galaxy Z Fold3 5G',
          img: 'images/products/banner_galaxy-z-fold3-5g.png',
        },
  
        {
          brand: 'Galaxy Z Flip3 5G',
          img: 'images/products/banner_galaxy-z-flip3-5g.png',
        },
  
        {
          brand: 'Galaxy S21 Ultra 5G',
          img: 'images/products/banner_galaxy-s21-ultra-5g.png',
        },
      ]

      $scope.items = [
        
        {
          brand: 'Galaxy Buds2',
          img: 'images/products/banner_galaxy-buds2.png',
        },
  
        {
          brand: 'Galaxy Watch4',
          img: 'images/products/banner_galaxy-watch4.png',
        },
  
        {
          brand: 'Galaxy Watch4 Classic',
          img: 'images/products/banner_galaxy-watch4-classic.png',
        },
  
        {
          brand: 'Accessories',
          img: 'images/products/banner_galaxy-z-fold3_acc.png',
        },
      ]
}])
 







