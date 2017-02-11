Notes

# mapStateToProps 

returns a bit of state to a key which is part of props

this.props.key = filtered(state)

# bindActionCreators

{todo:function} is an ojbect with value being action creator, just adds dispatch call to each of those functions

# destructuing

var {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {})//options? {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

# need to provide store to Provider redux


this.props refers to props defined when calling the componetnt