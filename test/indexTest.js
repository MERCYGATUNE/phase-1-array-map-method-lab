require ( './helpers.js' );

describe('index.js', function () {
  describe('titleCased()', function () {
    it('returns an array with title case tutorial names', function () {
      expect(titleCased()).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Constructor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
      ]
      )
    });
  });
});

// THINGS TO CONSIDER WHEN DOING THE ASSIGNMENT
// HOw CAN WE ITERATE THROUGH INDIVIDUAL WORDS IN A STRING..USE split()method
// HOW CAN WE EXECUTE AN ITERATION INSIDE AN ITERATION....google
//  HOW CAN WE CAPITALIZE JUST THE FIRST LETTER IN A WORD...use function titleCase