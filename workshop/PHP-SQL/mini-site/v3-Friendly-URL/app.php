<?php
// GRAB THE KEY FROM THE URL
$explode_url = explode('/', $_SERVER['REQUEST_URI']); // an array
$page = array_pop($explode_url); // echo $page;

// Default page key
if(!$page) {
  $page = 'index';
}

/* MENUS
-----------------------------------*/
function pages($page = '', $location = '') {

  // global $page;

  //PAGES DATA
  $pages_arr = [

    'index' => [
      'title' => 'Title for INDEX page',
      'menu' => 'HOME'
    ],

    'work' => [
      'title' => 'Title for WORK page',
      'menu' => 'WORK'
    ],

    'blog' => [
      'title' => 'Title for BLOG page',
      'menu' => 'BLOG'
    ],

    'contact' => [
      'title' => 'Title for CONTACT page',
      'menu' => 'CONTACT'
    ]

  ];


  if($location === 'head') {
    $title = $pages_arr[$page]['title']; //echo($title);
    return $title;
  }


  //DISPLAY MENUS - Loop inside the array
  foreach($pages_arr as $key => $item) {
    // var_dump($key);

    $active = ($page === $key) ? ' active' : '';

    echo '<li class="menu-item'.$active.'"><a href="'.$key.'">'.$item['menu'].'</a></li>';

  }

}