const filterObj = {
  _unitAge: undefined,
  _filterCount: 0
}
Object.defineProperty(filterObj, "unitAge", {
  enumerable: true,
  get(){
      return this._unitAge;
  },
  set(newVal) {
      if(newVal === ''){
          this._unitAge = undefined;
          this._filterCount--;
      } else {
          if(this._unitAge === undefined){
              this._filterCount++;
          }
          this._unitAge = newVal.toLowerCase();
      }
  }
});

Object.defineProperty(filterObj, "filterCount", {
  enumerable: true,
  get(){
      return this._filterCount;
  },
  set(newVal) {
      
      this._filterCount = newVal;
  }
});
export default filterObj;