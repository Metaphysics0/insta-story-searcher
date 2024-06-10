<script lang="ts">
  function search() {
    console.log('searching');
  }
</script>

<div class="form-wrap">
  <label class="input-wrap">
    <input type="text" name="query" placeholder="Search a viewer" id="" />
  </label>
  <button on:click={search}> Search 🚀 </button>
</div>

<style>
  .form-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px 5px;
    font-size: medium;
    font-weight: 500;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    border: 1px solid grey;
    margin-bottom: 10px;
  }
  button {
    font-weight: 700;
    border: 1px solid rgb(213, 213, 213);
  }
</style>
