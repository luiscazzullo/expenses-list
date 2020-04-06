export const budgetReview = (budget, residual) => {
    let cssClass;
    if((budget / 4) > residual) {   
        cssClass = 'alert alert-danger';
    } else if ((budget / 2) > residual) {
        cssClass = 'alert alert-warning'
    } else {
        cssClass = 'alert alert-success'
    }
    return cssClass
}