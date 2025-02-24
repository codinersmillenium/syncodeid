import Contest "../canisters/contest";
import TypesContest "../canisters/contest/types";
import Error "mo:base/Error";

actor {    

  stable var items: [TypesContest.Contest] = [];
  var myInstance : ?Contest.Contest = ?Contest.Contest("init");

  public query func getContests() : async [TypesContest.Contest] {
    switch myInstance {
      case (?instance) {
        instance.lists();
      };
      case null {
        throw Error.reject("Instance belum siap");
      };
    }
  };

  public shared func createContest(contest: TypesContest.Contest) : async Text {      
      switch myInstance {
        case (?instance) {
          items := await instance.create(contest.id, contest.title, contest.describe);
          return "Contest created";
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };

  public shared func updateContest(contest: TypesContest.Contest) : async Text {      
      switch myInstance {
        case (?instance) {
          items := await instance.update(contest.id, contest.title, contest.describe);
          return "Contest updated";
        };
        case null {
          throw Error.reject("Instance belum siap");
        };
      }
  };
  
};