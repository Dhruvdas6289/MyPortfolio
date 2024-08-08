import React from 'react';

const Review1 = () => {
  return (
    <div className="review" id="Review1">
        <main>
            <h1>
                <center>Review</center>
            </h1>
            <form>

              <div>
                <label>Name</label>
                <input type="text" required placeholder="Abc"  />
              </div>
              <div>
              <label>Email</label>
                <input type="email" required placeholder="abc@gmail.com"  />
              </div>
              <div>
              <label>Review</label>
                <input type="text" required placeholder="Give your review"  />
              </div>
              <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Review1;