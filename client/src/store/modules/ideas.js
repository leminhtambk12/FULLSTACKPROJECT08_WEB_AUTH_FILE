import IdeasServices from "../../IdeasServices";
import router from "../../router/index";
export const state = {
    ideas: [],
};
export const mutations = {
    GETIDEAS(state, ideas) {
        state.ideas = ideas;
    },
    ADDNEWIDEA(state, newIdea) {
        state.ideas.push(newIdea);
    },
    UPVOTEIDEA(state, updateVoteIdea) {
        const targetIdea = state.ideas.find(
            (idea) => idea._id === updateVoteIdea._id
        );
        Object.assign(targetIdea, updateVoteIdea.vote);
    },
    DELETEIDEA(state, id) {
        state.ideas = state.ideas.filter((idea) => idea._id !== id);
    },
};
export const actions = {
    async getIdeas({ commit }) {
        const ideas = await IdeasServices.getIdeas();

        commit("GETIDEAS", ideas);
    },
    async createIdea({ commit }, idea) {
        const newIdea = await IdeasServices.insertIdea(idea);
        commit("ADDNEWIDEA", newIdea);
        router.push("/ideas");
    },
    async upVoteIdea({ commit }, idea) {
        idea.vote++;
        const updateVoteIdea = await IdeasServices.updateVoteIdea({
            id: idea._id,
            vote: idea.vote,
        });
        commit("UPVOTEIDEA", updateVoteIdea);
    },
    async downVoteIdea({ commit }, idea) {
        idea.vote--;
        const updateVoteIdea = await IdeasServices.updateVoteIdea({
            id: idea._id,
            vote: idea.vote,
        });
        commit("UPVOTEIDEA", updateVoteIdea);
    },
    async deleteIdea({ commit }, id) {
        await IdeasServices.deleteIdea(id);
        commit("DELETEIDEA", id);
    },
};