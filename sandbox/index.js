$(document).ready(function () {
  const div1 = $('#div1')
    , div2 = $('#div2');

  function1 = () => div1.append('function1 executed<br />');

  const function2 = () => div1.append('function2 executed<br />');

  const obj = {
    function3: () => div1.append('function3 executed<br />')
  };

  gobj = {
    function4: () => div1.append('function4 executed<br />')
  }

  function1();
  function2();
  obj.function3();
  gobj.function4();

  div1.append(<br />);
  div2.load('BasicFunctionExample2.html');

});