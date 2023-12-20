const Posts = [
    { title: 'post1', body: 'this is post1' },
    { title: 'post2', body: 'this is post2' }
  ];
  
  let lastUserActivityTime = null;
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      Posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject('Error:');
        }
      }, 2000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        lastUserActivityTime = new Date();
        resolve(lastUserActivityTime);
      }, 1000);
    });
  }
  
  function deletePost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = Posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  async function main() {
    try {
      await Promise.all([createPost({ title: 'post3', body: 'this is post3' }), updateLastUserActivityTime()]);
  
      getPosts();
  
      console.log('All posts:');
      Posts.forEach((post) => {
        console.log(post.title);
      });
  
      console.log('Last User Activity Time:', lastUserActivityTime);
  
      const deletedPost = await deletePost();
  
      console.log('Deleted Post:', deletedPost);
  
      console.log('New set of Posts:');
      Posts.forEach((post) => {
        console.log(post.title);
      });
  
      // Create a new promise called getColdDrinks 
      const getColdDrinks = new Promise((resolve) => {
        setTimeout(() => {
          resolve('Got cold drinks');
        }, 1000);
      });
  
      
      const result = await getColdDrinks;
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call main function 
  main();