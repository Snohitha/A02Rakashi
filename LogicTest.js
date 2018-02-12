var app = {
    launch: function(){
    app: result();
     },
    result: function(num1,num2)
    {
    return num1*num2;
    },
    
    };
    
    QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
    });
    
    
    QUnit.test('Testing result function with several sets of inputs', function (assert) {
    assert.equal(app.result(2,2),4,'Tested with two positive numbers')
    assert.equal(app.result(-2,-7),14,'Tested with two negative numbers')
    assert.equal(app.result(3,-1),-3,'Tested with a positive and a negative numbers')
    });
    
   