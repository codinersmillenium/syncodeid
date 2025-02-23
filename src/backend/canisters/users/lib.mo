module {
  public class MyClass(x : Text) {
    private var myName : Text = x;

    public func greet() : async Text {
      return "Hello, " # myName # "!";
    };

    public func setName(newName : Text) : async () {
      myName := newName;
    };
  };
}