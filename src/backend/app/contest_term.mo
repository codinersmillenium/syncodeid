import ContestTerm "../canisters/contest_term";
import TypesContestTerm "../canisters/contest_term/types";
import Error "mo:base/Error";

actor {    

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
          await instance.create(data);
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };

  public shared func updateContestTerm(data: TypesContestTerm.ContestTerm) : async Text {      
      switch myInstance {
        case (?instance) {
          await instance.update(data);
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };
  
};