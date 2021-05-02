// Using Netlify Functions is a workaround since Netlify is not supporting getServerSideProps currently
// check for updates: https://github.com/netlify/netlify-plugin-nextjs

exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Like a Boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never Knew Existed", author: "luigi" },
    { title: "Ultimate Street Fighter Guide", author: "chun-li" },
  ];
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ message: "You must be logged in to see this page" }),
  };
};
