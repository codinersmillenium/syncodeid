
module Types{
    public type ContestTerm = object {
        id: Nat32;
        name: Text;
        fk_contest: Text;
    };
};