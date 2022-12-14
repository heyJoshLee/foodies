import ImagePlaceholder from '../assets/images/profile-placeholder.png';
import RecipePlaceholderImage from '../assets/images/recipe-image-placeholder.jpg';
const recipe1 = {
  _id: 1,
  name: 'Good Burger',
  tags: ['burger', 'beef'],
  user: {
    username: 'josh',
    _id: 1,
    image: ImagePlaceholder
  },
  image: RecipePlaceholderImage,
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  servings: 5,
  ingredients: [
    {
      name: 'bun',
      quantity: 3,
      measurement: 'package'
    },
    {
      name: 'ground beef',
      quantity: 1,
      measurement: 'pound'
    },
    {
      name: 'cheese',
      quantity: 1,
      measurement: 'package'
    }
  ],
  directions: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
  ],
  reviewCount: 123,
  rating: 3.4,
  reviews: [
    {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'good'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Dolor magna eget est lorem ipsum dolor. Pellentesque adipiscing commodo elit at imperdiet. Volutpat maecenas volutpat blandit aliquam etiam. Dignissim enim sit amet venenatis urna cursus. Et ultrices neque ornare aenean euismod elementum. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ultrices tincidunt arcu non sodales neque. Duis ultricies lacus sed turpis tincidunt id aliquet. Imperdiet dui accumsan sit amet nulla facilisi. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Facilisi morbi tempus iaculis urna id volutpat. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Sapien nec sagittis aliquam malesuada.'
    },
  ]
}

const recipe2 = {
  _id: 2,
  name: 'Better Burger',
  tags: ['burger', 'beef'],
  user: {
    username: 'josh',
    _id: 1,
    image: ImagePlaceholder
  },
  image: RecipePlaceholderImage,
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  servings: 5,
  ingredients: [
    {
      name: 'bun',
      quantity: 3,
      measurement: 'package'
    },
    {
      name: 'ground beef',
      quantity: 1,
      measurement: 'pound'
    },
    {
      name: 'cheese',
      quantity: 1,
      measurement: 'package'
    }
  ],
  directions: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
  ],
  reviewCount: 123,
  rating: 3.4,
  reviews: [
    {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    },
  ]
}

const recipe3 = {
  _id: 3,
  name: 'Beef Taco',
  tags: ['taco', 'beef'],
  user: {
    username: 'josh',
    _id: 1,
    image: ImagePlaceholder
  },
  image: RecipePlaceholderImage,
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  servings: 5,
  ingredients: [
    {
      name: 'bun',
      quantity: 3,
      measurement: 'package'
    },
    {
      name: 'ground beef',
      quantity: 1,
      measurement: 'pound'
    },
    {
      name: 'cheese',
      quantity: 1,
      measurement: 'package'
    }
  ],
  directions: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
  ],
  reviewCount: 123,
  rating: 3.4,
  reviews: [
    {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    },
  ]
}

const recipe4 = {
  _id: 4,
  name: 'Chicken Taco',
  tags: ['taco', 'chicken'],
  user: {
    username: 'josh',
    _id: 1,
    image: ImagePlaceholder
  },
  image: RecipePlaceholderImage,
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  servings: 5,
  ingredients: [
    {
      name: 'bun',
      quantity: 3,
      measurement: 'package'
    },
    {
      name: 'ground beef',
      quantity: 1,
      measurement: 'pound'
    },
    {
      name: 'cheese',
      quantity: 1,
      measurement: 'package'
    }
  ],
  directions: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
  ],
  reviewCount: 123,
  rating: 3.4,
  reviews: [
    {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    }, {
      user: {
        username: 'josh',
        _id: 1,
        image: ImagePlaceholder
      },
      rating: 3,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    },
  ]
}

const Recipes = [recipe1, recipe2, recipe3, recipe4];

export default Recipes;