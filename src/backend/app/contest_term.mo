import ContestTerm "../canisters/contest_term";
import TypesContestTerm "../canisters/contest_term/types";
import Error "mo:base/Error";

actor {    

  
  stable var items: [TypesContestTerm.ContestTerm] = [];
  var myInstance : ?ContestTerm.ContestTerm = ?ContestTerm.ContestTerm("init");
  public query func getContestTerm() : async [TypesContestTerm.ContestTerm] {
    switch myInstance {
      case (?instance) {
        instance.lists();
      };
      case null {
        throw Error.reject("Instance belum siap");
      };
    }
  };

  public shared func createContestTerm(data: TypesContestTerm.ContestTerm) : async Text {      
      switch myInstance {
        case (?instance) {
          items := await instance.create(data);
          return "Contest Term created";
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };

  public shared func updateContestTerm(data: TypesContestTerm.ContestTerm) : async Text {      
      switch myInstance {
        case (?instance) {
          items := await instance.update(data);
          return "Contest Term Update";
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };
  
};