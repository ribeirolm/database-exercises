
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.integer('famous_person_id');
      table.foreign('famous_person_id').references('id').on('famous_people');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropForeign('famous_person_id');
      table.dropColumn('famous_person_id');
    })
  ])
};
