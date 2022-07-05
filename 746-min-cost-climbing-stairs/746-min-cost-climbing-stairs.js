/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
        let twoStepBefore = cost[0];
        let oneStepBefore = cost[1];
        let curr = 0;
        for(let i = 2; i< cost.length; i++){
            curr = Math.min(twoStepBefore,oneStepBefore) + cost[i];
            twoStepBefore = oneStepBefore;
            oneStepBefore = curr;
        }
        return Math.min(oneStepBefore,twoStepBefore);
};