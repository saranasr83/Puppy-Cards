import React from "react";
import PuppyCard from "./Component/PuppyCard";
import Title from "./Component/Title";
import Wrapper from "./Component/Wrapper";
import puppies from "./puppy.json";

class App extends React.Component {
  state = {
    puppies
  }
  removePuppy = id => {
    const newPuppiesList = this.state.puppies.filter(puppy => puppy.id !== id);
    this.setState({ puppies: newPuppiesList })

  }
  render() {
    return (
      <Wrapper>
        <Title>My Favorite Puppies</Title>
        {this.state.puppies.map(puppy => (
          <PuppyCard
          removePuppy={this.removePuppy}
          id={puppy.id}
          key={puppy.id}
          breed={puppy.breed}
          image={puppy.image}
          origin={puppy.origin}
          />
        ))}
      </Wrapper>
    )
  }
}

// const App = ()=> (

//   <Wrapper>
//     <Title>My Favorite Puppies</Title>
//     <PuppyCard
//     breed= {puppies[0].breed}
//     image= {puppies[0].image} 
//     origin= {puppies[0].origin}
//     />
//      <PuppyCard
//     breed= {puppies[1].breed}
//     image= {puppies[1].image}
//     origin= {puppies[1].origin}
//     />
//      <PuppyCard
//     breed= {puppies[2].breed}
//     image= {puppies[2].image}
//     origin= {puppies[2].origin}
//     />
//      <PuppyCard
//     breed= {puppies[3].breed}
//     image= {puppies[3].image}
//     origin= {puppies[3].origin}
//     />
//      <PuppyCard
//     breed= {puppies[4].breed}
//     image= {puppies[4].image}
//     origin= {puppies[4].origin}
//     />
//      <PuppyCard
//     breed= {puppies[5].breed}
//     image= {puppies[5].image}
//     origin= {puppies[5].origin}
//     />
//      <PuppyCard
//     breed= {puppies[6].breed}
//     image= {puppies[6].image}
//     origin= {puppies[6].origin}
//     />
//      <PuppyCard
//     breed= {puppies[7].breed}
//     image= {puppies[7].image}
//     origin= {puppies[7].origin}
//     />
//      <PuppyCard
//     breed= {puppies[8].breed}
//     image= {puppies[8].image}
//     origin= {puppies[8].origin}
//     />
//      <PuppyCard
//     breed= {puppies[9].breed}
//     image= {puppies[9].image}
//     origin= {puppies[9].origin}
//     />

//   </Wrapper>
// )

export default App;